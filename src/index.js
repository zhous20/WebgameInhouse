function switchST() {

    document.getElementById('RI').style.display = 'none';
    document.getElementById('ST').style.display = 'block';
    document.getElementById('ST_join').style.display = 'none';
    document.getElementById('CU').style.display = 'none';
    document.getElementById('Settings').style.display = 'none';
}

function switchST_join() {

    document.getElementById('RI').style.display = 'none';
    document.getElementById('ST').style.display = 'none';
    document.getElementById('ST_join').style.display = 'block';
    document.getElementById('CU').style.display = 'none';
    document.getElementById('Settings').style.display = 'none';
}

function switchRI() {
    document.getElementById('RI').style.display = 'block';
    document.getElementById('ST').style.display = 'none';
    document.getElementById('ST_join').style.display = 'none';
    document.getElementById('CU').style.display = 'none';
    document.getElementById('Settings').style.display = 'none';
}

function switchCU() {

    document.getElementById('RI').style.display = 'none';
    document.getElementById('ST').style.display = 'none';
    document.getElementById('ST_join').style.display = 'none';
    document.getElementById('CU').style.display = 'block';
    document.getElementById('Settings').style.display = 'none';
}

function switchSettings() {

    document.getElementById('RI').style.display = 'none';
    document.getElementById('ST').style.display = 'none';
    document.getElementById('ST_join').style.display = 'none';
    document.getElementById('CU').style.display = 'none';
    document.getElementById('Settings').style.display = 'block';
}
