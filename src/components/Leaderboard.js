import React from 'react'
import { connect } from 'react-redux';

function Leaderboard ({users}) {
    return (
      <ul>
        {users.map((user) => (
          <li className='user' key={user.id} >
            <img src={user.avatarURL} />
            <div>
              <h1>{user.name}</h1>
              <p>{user.polls} Polls</p>
              <p>{user.answers} Answers</p>
             </div>
          </li>
        ))}
      </ul>
    )
  
}

function mapStateToProps({users}) {
  return {
    users: Object.keys(users).map((id) => {
      const {name, avatarURL, polls, answers} = users[id]

      return {
        id: id,
        name: name,
        avatarURL: avatarURL,
        polls: polls.length,
        answers: answers.length,
      }
    }).sort((a,b,) => b.polls + b.answers > a.polls + a.answers)
  }
}

export default connect(mapStateToProps)(Leaderboard)