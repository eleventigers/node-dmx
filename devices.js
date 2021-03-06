module.exports = {
	'generic': {
		channels: ['dimmer']
	},
	'showtec-multidim2': {
		channels: ['1', '2', '3', '4']
	},
	'eurolite-led-bar': {
		channels: ['red1','green1','blue1','red2','green2','blue2','red3','green3','blue3','red4','green4','blue4','red5','green5','blue5','red6','green6','blue6','red7','green7','blue7','red8','green8','blue8','red9','green9','blue9','red10','green10','blue10','red11','green11','blue11','red12','green12','blue12','red13','green13','blue13','red14','green14','blue14','red15','green15','blue15','red16','green16','blue16'],
		ranges: {
			'ctrl': {
				'type': 'option',
				'options': [
					{'value':   0, 'label': 'Black Out'},
					{'value':   1, 'label': 'Dimmer 1'},
					{'value':  16, 'label': 'Dimmer 2'},
					{'value':  32, 'label': 'Red'},
					{'value':  48, 'label': 'Green'},
					{'value':  64, 'label': 'Blue'},
					{'value':  80, 'label': 'Purple'},
					{'value':  96, 'label': 'Yellow'},
					{'value': 112, 'label': 'Cyan'},
					{'value': 128, 'label': 'White'},
					{'value': 144, 'label': 'Color change'},
					{'value': 160, 'label': 'Color flow'},
					{'value': 176, 'label': 'Color dream'},
					{'value': 192, 'label': 'Multi flow'},
					{'value': 208, 'label': 'Dream flow'},
					{'value': 224, 'label': 'Two color flow'},
					{'value': 240, 'label': 'Sound activity'}
				]
			},
			'dimmer': {
				'type': 'slider',
				'min': 0,
				'max': 255
			}
		}
	},
	'stairville-led-par-56': {
		channels: ['ctrl', 'red', 'green', 'blue', 'speed'],
		ranges: {
			'ctrl': {
				'type': 'option',
				'options': [
					{'value': 0,   'label': 'RGB Control'},
					{'value': 64,  'label': '7 color fade'},
					{'value': 128, 'label': '7 color change'},
					{'value': 192, 'label': '3 color change'}
				]
			}
		}
	}
};