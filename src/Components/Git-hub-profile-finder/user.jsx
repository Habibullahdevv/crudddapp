import './style.css'
export default function User({ User }) {
    const { avatar_url, name, followers, login, following, public_repos, created_at } = User;
    const createdDate = new Date(created_at);

    return (
        <>
            <div className="user-profile">
                <div className="user-header">
                    <img src={avatar_url} alt="User" className="avatar" />
                    <div className="user-info">
                        <a href={`https://github.com/${login}`} className="user-name">
                            {name || login}
                        </a>
                        <p className="join-date">
                            Joined {`${createdDate.getDate()} ${createdDate.toLocaleString('en-us', { month: 'short' })} ${createdDate.getFullYear()}`}
                        </p>
                    </div>
                </div>
                <div className="user-stats">
                    <div className="stat">
                        <p className="stat-title">Public Repos</p>
                        <p className="stat-value">{public_repos}</p>
                    </div>
                    <div className="stat">
                        <p className="stat-title">Followers</p>
                        <p className="stat-value">{followers}</p>
                    </div>
                    <div className="stat">
                        <p className="stat-title">Following</p>
                        <p className="stat-value">{following}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
