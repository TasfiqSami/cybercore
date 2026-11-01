'use client';

import {useState} from 'react';
import {Terminal, Shield, Network, Bot, Database, Lock} from 'lucide-react';

export default function Home(){

const [boot,setBoot]=useState(true);
const [logs,setLogs]=useState([
'Loading NEXUS kernel...',
'Initializing cyber modules...',
'Secure console ready.'
]);

function launch(){
 setBoot(false);
}

function run(){
 setLogs([...logs,
 'Starting simulation...',
 'Analyzing demo environment...',
 'Generating report...',
 'Mission complete.'
 ]);
}

if(boot)
return <main className="screen">
<h1>NEXUS SEC OS</h1>
<p>Boot Sequence Started...</p>
<p>Loading Kernel ........ OK</p>
<p>Initializing Neural Interface .... OK</p>
<button onClick={launch}>ENTER SYSTEM</button>
</main>;

return <main className="screen">
<h1>NEXUS SEC OS</h1>
<p>Operator: TASFIQ | Clearance: LEVEL 5</p>

<div className="grid">
<Card icon={<Terminal/>} title="Terminal" text="Command simulation"/>
<Card icon={<Shield/>} title="Scanner Center" text="Security analysis"/>
<Card icon={<Network/>} title="Network Map" text="Cyber visualization"/>
<Card icon={<Lock/>} title="Password Lab" text="Strength analysis"/>
<Card icon={<Database/>} title="Reports" text="Security reports"/>
<Card icon={<Bot/>} title="NEXUS AI" text="Cyber assistant"/>
</div>

<div className="terminal">
{logs.map((x,i)=><p key={i}>root@nexus:~$ {x}</p>)}
<button onClick={run}>RUN MISSION SIMULATION</button>
</div>
</main>
}

function Card({icon,title,text}){
return <div className="card">
{icon}
<h2>{title}</h2>
<p>{text}</p>
</div>
}