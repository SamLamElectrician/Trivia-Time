import React from 'react';

const About = () => {
	return (
		<>
			<div className='aboutModal'>
				<p>
					Welcome to the quiz app. Here you will select a quiz genre, how hard
					you want the quiz to be and how your avatar will <Look></Look>
				</p>
				<div className='startBtn'>
					<Link to='/generator'>Click here to begin</Link>
				</div>
			</div>
		</>
	);
};

export default About;
