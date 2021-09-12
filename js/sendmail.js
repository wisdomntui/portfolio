function sendMail(credentials) {
	Email.send({
		SecureToken: '37d413eb-6967-4d24-af04-746e56fd225b',
		To: 'wisdomntui@gmail.com',
		From: 'wisdomntui@gmail.com',
		Subject: 'Hello Wisdom',
		Body: 'hello'
	}).then((message) => alert(message));
}
