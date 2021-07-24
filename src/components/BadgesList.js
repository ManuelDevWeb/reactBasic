import React from 'react'

//Creando componente
const BadgesList = (props) => {
    const { badges } = props;

    return (
        <ul className="list-unstyled">
            {badges.map((badge) => {
                return (
                    <li key={badge.id} className="mb-3 Badge__marco">
                        <div className="row">
                            <div className="col-3">
                                <img src={badge.avatarUrl} alt="Image" className="Badge__avatar" />
                            </div>
                            <div className="col-8">
                                <h3>{badge.firstName} {badge.lastName}</h3>
                                <p>@{badge.twitter}</p>
                                <p>{badge.jobTitle}</p>
                            </div>
                        </div>

                    </li>
                )
            })}
        </ul>
    );
}

//Exportando componente
export default BadgesList;