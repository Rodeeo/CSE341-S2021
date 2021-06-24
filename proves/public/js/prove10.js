const getData = async(url = '') => {
    const response = await fetch(url, {
        method: 'GET'
    })
    return response.json()
}

const postData = async(url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return response
}

const populateList = () => {
    const nameList = document.getElementById('nameList')
    nameList.innerHTML = '';

    const data = getData('/fetchAll');

    data.then(json => {
        json.avengers.forEach(item => {
            nameList.innerHTML += `<li class="list-group-item">${item.name}</li>`
        })
    }).catch(err => {
        console.log(err, "EROOR EROOR EROOR");
    });
}

const submitName = () => {
    const newName = document.getElementById('newName').value;

    const data = postData('/insertName', {
        newName: newName
    })

    data.then(response => {
        console.log(response)
        if (response.status == 200) {
            location.reload(true);
        } else {
            console.error(status)
        }
    }).catch(err => {
        console.log(err);
    })
}

populateList()