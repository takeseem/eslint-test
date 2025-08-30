export class SafeMessager {
	private winHandlers: Map<Window, string> = new Map();

	/** command eslint correct report: `abc, handler, win` is unused */
	havFun1(abc?: string) {
		this.winHandlers.forEach((handler, win) => {
			if (typeof handler !== 'function') {
				console.log('check: win is closed, call unbind');
			}
		});
	}

	/**
	 * eslint can not report `handler` is unused
	 * maybe the last arg `win` is used, so skip the check before of `win` args
	 */
	havFun2(abc?: string) {
		this.winHandlers.forEach((handler, win) => {
			if (win.closed) {
				console.log('check: win is closed, call unbind');
			}
		});
	}

	/** command eslint cannot report any unused var */
	havFun3(a: string, b: string, c: string, last: string) {
		if (last != '1') {
			console.log('check: last is not 1');
		}
	}
}
