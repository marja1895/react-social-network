import React from "react"
import classes from "./Users.module.css"

let Users = (props) => {
	if (props.users.length === 0) {
		props.setUsers([
			{
				id: 1,
				photoUrl: 'https://i.pinimg.com/736x/c1/c5/c9/c1c5c948b57be809e7037d47d98b62b6.jpg',
				followed: true,
				fullName: 'Dmitry',
				status: 'I am a boss',
				location:
				{
					city: 'Minsk',
					country: 'Belarus'
				}
			},
			{
				id: 2,
				photoUrl: 'https://i.pinimg.com/736x/c1/c5/c9/c1c5c948b57be809e7037d47d98b62b6.jpg',
				followed: true,
				fullName: 'Andrey',
				status: 'I am cool developer',
				location:
				{
					city: 'Ottava',
					country: 'Canada'
				}
			},
			{
				id: 3,
				photoUrl: 'https://i.pinimg.com/736x/c1/c5/c9/c1c5c948b57be809e7037d47d98b62b6.jpg',
				followed: true,
				fullName: 'Alice',
				status: 'I am working at SpaceX',
				location:
				{
					city: 'Los-Angeles',
					country: 'USA'
				}
			}])
	}
	return (
		<div>
			{props.users.map((u) => (
				<div key={u.id}>
					<span>
						<div>

							<img src={u.photoUrl} className={classes.userPhoto} />
						</div>
						<div>
							{u.followed
								? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
								: <button onClick={() => { props.follow(u.id) }}>Follow</button>}

						</div>
					</span>
					<span>
						<div> {u.fullName}</div>
						<div>{u.status}</div>
					</span>
					<span>
						<div>{u.location.country}</div>
						<div>{u.location.city}</div>
					</span>
				</div>
			))}
		</div>
	)
}

export default Users
