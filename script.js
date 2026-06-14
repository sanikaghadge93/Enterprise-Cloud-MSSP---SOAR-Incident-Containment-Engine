const alerts = [
{
ip:"192.168.1.100",
type:"Brute Force",
score:95
},
{
ip:"10.0.0.20",
type:"Malware",
score:88
},
{
ip:"172.16.0.50",
type:"Suspicious Login",
score:75
}
];

const table = document.getElementById("alertTable");

alerts.forEach(alert => {

const row = document.createElement("tr");

row.innerHTML = `
<td>${alert.ip}</td>
<td>${alert.type}</td>
<td>${alert.score}</td>
<td>
<button onclick="contain('${alert.ip}')">
Contain
</button>
</td>
`;

table.appendChild(row);

});

function contain(ip){

const logs = document.getElementById("logs");

const item = document.createElement("li");

item.textContent =
`Blocked malicious IP: ${ip}`;

logs.appendChild(item);

alert(`Containment executed for ${ip}`);

}