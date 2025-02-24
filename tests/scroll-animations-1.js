export default {
	title: 'Scroll-linked Animations',
	links: {
		tr: 'scroll-animations-1',
		dev: 'scroll-animations-1',
	},
	status: {
		stability: 'experimental',
	},
	'@rules': {
		'@scroll-timeline': {
			links: {
				tr: '#scroll-timeline-at-rule',
				dev: '#scroll-timeline-at-rule',
			},
			tests: ['@scroll-timeline scroller { source: selector(#root); }'],
		},
	},
	descriptors: {
		'@scroll-timeline example/source': {
			links: {
				tr: '#scroll-timeline-descriptors',
				dev: '#scroll-timeline-descriptors',
			},
			tests: ['selector(#id)', 'auto', 'none'],
		},
		'@scroll-timeline example/orientation': {
			links: {
				tr: '#scroll-timeline-descriptors',
				dev: '#scroll-timeline-descriptors',
			},
			required: {
				'*': { descriptor: 'source: auto' },
			},
			tests: ['auto', 'block', 'inline', 'horizontal', 'vertical'],
		},
		'@scroll-timeline example/offsets': {
			links: {
				tr: '#scroll-timeline-descriptors',
				dev: '#scroll-timeline-descriptors',
			},
			required: {
				'*': { descriptor: 'source: auto' },
			},
			tests: [
				'none',
				'auto',
				'100px',
				'5%',
				'selector(#id)',
				'selector(#id) start',
				'selector(#id) end',
				'selector(#id) 0.5',
				'selector(#id) start 0.5',
				'selector(#id), 100px, auto',
			],
		},
	},
};
