

const sentence = "Busty the cat says hi!\n";
count = 0;
const typewriter = () => {
for (const char of sentence) {
	let timer = Number(count);
	count += 1;
	setTimeout(() => process.stdout.write(char), 50 * timer )
	
}
};


typewriter();