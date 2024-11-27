export abstract class DocumentController {
	static lockBodyId(): void {
		document.body.id = 'LOCK'
	}
	static unlockBodyId(): void {
		document.body.id = ''
	}
}
