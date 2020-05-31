
function loadData() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'servers.json', true);

  xhr.onload = function() {
    if(this.status === 200) {
      const serverItems = JSON.parse(this.responseText);

      let output = '';

      serverItems.forEach(function(server){
        output += `
          <row class="row">
            <input type="radio" name="expand">
            <span class="cell primary" data-label="Hostname">${server.hostname}</span>
            <span class="cell" data-label="IPAddress">${server.ipaddress}</span>
            <span class="cell" data-label="Description">${server.description}</span>
            <span class="cell" data-label="CPU">${server.cpu}</span>
            <span class="cell" data-label="Memory">${server.memory}</span>
            <span class="cell" data-label="HardDisk">${server.harddisk}</span>
            <span class="cellstatus" data-label="Status">${server.status}</span>
          </row>
        `
      });

      document.getElementById('table').innerHTML = output;
    }
  }

  xhr.send();
}

loadData();