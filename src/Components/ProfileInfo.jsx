import React from "react";

const ProfileInfo = (props) => {
    return (
        <span><div className="row">
            <div className="col-4">
                <img
                    className="avatar"
                    src="https://sun9-37.userapi.com/impf/c850132/v850132268/aa75b/UWVuTLspDPA.jpg?size=1280x768&quality=96&sign=07e29460571e3eaa7b1be5e5ed068070&c_uniq_tag=aUII7MLn3Aw3A1e9NoagdHZU4BOvyoZ4FYhRubXruLs&type=album"
                    alt="лого" />
            </div>
            <div className="col-8">
                <dl>
                    <dt>Дата рождения:</dt>
                    <dd>{props.date}</dd>
                    <dt>Город:</dt>
                    <dd>{props.city}</dd>
                    <dt>Образование:</dt>
                    <dd>{props.education}</dd>
                    <dt>Сайт:</dt>
                    <dd>{props.cite}</dd>
                </dl>
            </div>
        </div></span>
    )
}

export default ProfileInfo;