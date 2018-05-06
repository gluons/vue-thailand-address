import ansiEscapes from 'ansi-escapes';

/**
 * Clear terminal screen.
 */
export default function cleanScreen(): void {
	process.stdout.write(ansiEscapes.clearScreen);
}
