import { Platform, PermissionsAndroid } from 'react-native'

export class Function {

  static generateHslColors(string, tmp) {
    const rnd = (min, max) => { return Math.floor(Math.random() * (max - min + 1) + min); };

    let colors;
    let hue = string.length
    let saturation = string.length
    let lightnes = string.length

    if (tmp == 'chocolate') {
      colors = `hsl(${0}, ${rnd(saturation + 15, 26)}%, ${rnd(lightnes + 17, 33)}%)`;
    } else if (tmp == 'yellow') {
      colors = `hsl(${44}, ${rnd(saturation + 55, 100)}%, ${rnd(lightnes + 40, 68)}%)`;
    } else {
      colors = `hsl(${354}, ${79}%, ${62}%)`;
    }
    return colors
  }
  
  static getAvatarChar(text) {
		if (text != '' && text != null) {
			var split = text.match(/\b(\w)/g);

			var char = "";
			if (text.length == 1) {
				char = text;
			} else if (split.length == 1) {
				char = text.toString().substring(0, 2);
			} else {
				char = split[0] + '' + split[1]
			}

		} else {
			var char = '';
		}

		return char;
	}

}