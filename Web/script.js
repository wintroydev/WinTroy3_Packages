document.getElementById('isModal').addEventListener('change', function () {
    var modalFields = document.getElementById('modalFields');
    var buttonFields = document.getElementById('buttonFields');
    if (this.checked) {
        modalFields.style.display = 'block';
        buttonFields.style.display = 'none';
    } else {
        modalFields.style.display = 'none';
        buttonFields.style.display = 'block';
    }
});

document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();

    var isModal = document.getElementById('isModal').checked;
    var jsonData = {};

    if (isModal) {
        jsonData = {
            ModalId: document.getElementById('modalId').value,
            DllFileName: document.getElementById('dllFileName').value,
            TypeName: document.getElementById('typeName').value,
            Entry: document.getElementById('entry').value,
            IsModal: true
        };
    } else {
        jsonData = {
            ButtonLabel: document.getElementById('buttonLabel').value,
            ButtonId: document.getElementById('buttonId').value,
            DllFileName: document.getElementById('buttonDllFileName').value,
            TypeName: document.getElementById('buttonTypeName').value,
            Entry: document.getElementById('buttonEntry').value,
            IsMainButton: document.getElementById('isMainButton').checked
        };
    }

    document.getElementById('output').style.display = 'block';
    document.getElementById('jsonOutput').textContent = JSON.stringify(jsonData, null, 4);
});