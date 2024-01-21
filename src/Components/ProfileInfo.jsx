import React from "react";

const ProfileInfo = (props) => {
    return (
        <span><div className="row">
            <div className="col-6">
                <img
                    className="avatar"
                    src={props.avatar}
                    alt="лого" />
            </div>
            <div className="col-6">
                <dl>
                    <dt>Имя</dt>
                    <dd>{`${props.surname} ${props.name}`}</dd>
                    <dt>Дата рождения:</dt>
                    <dd>{props.dateOfBirth}</dd>
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