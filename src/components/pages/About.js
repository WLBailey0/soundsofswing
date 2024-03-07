import React from "react";
import members from "../../members/bandMembers.json"

export default function About() {
    return (
        <div >
            <h1>About</h1>
            <h3>Sounds of Swing</h3>
            <li className="col s12">
                {members.map((obj) => (
                    <div key={obj.index} className="row">
                        <ul className="col s12">
                            Member {obj.name}: Instrument {obj.instrument}
                            <ul className="col s6"> bio: {obj.bio}</ul>
                        </ul>
                    </div>
                ))}
            </li>

        </div>
    );
};