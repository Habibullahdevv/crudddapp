import { useEffect, useState } from "react";
import User from "./user";
import './style.css'
export default function GithubProfileFinder() {
    const [username, setusername] = useState("habibullahdevv");
    const [userData, setuserData] = useState(null);
    const [loading, setloading] = useState(true);

    async function fetchGithubData() {
        setloading(true);
        const res = await fetch(`https://api.github.com/users/${username}`);
        const data = await res.json();
        if (data) {
            setuserData(data);
            setloading(false);
            setusername("");
        }
        console.log(data);
    }

    function HandleSubmit() {
        fetchGithubData();
    }

    useEffect(() => {
        fetchGithubData();
    }, []);

    if (loading) {
        // Ensure the loading message is rendered
        return <h1>Loading Data Please wait...</h1>;
    }

    return (
        <>
        <hr />
            <div className="git-container" style={{ padding: 20 }}>
                <div className="gitinput-wrapper">
                <h1>((( GIT HUB PROFILE FINDER )))</h1>

                    <input
                        name="search-by-username"
                        type="text"
                        placeholder="Search GitHub username"
                        value={username}
                        onChange={(event) => setusername(event.target.value)}
                    />
                    <button onClick={() => HandleSubmit()}>Search</button>
                </div>
                {userData !== null ? <User User={userData} /> : null}
            </div>
        </>
    );
}
