

const sentence = "Busty the cat says hi!";
const newSentence =  `${sentence} \n`
count = 0;
const typewriter = () => {
for (const char of newSentence) {
	let timer = Number(count);
	count += 1;
	setTimeout(() => process.stdout.write(char), 50 * timer )
	
};
};


typewriter();
