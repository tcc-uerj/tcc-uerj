import { ArgumentMetadata, PipeTransform } from '@nestjs/common';

export class CaptalizePipe implements PipeTransform {
    private sanitize(name: string) {
        const names = name.split(' ');
        const captalizedNames = names.map((word) => {
            const firstLetter = word.charAt(0);
            return word.replace(firstLetter, firstLetter.toLocaleUpperCase());
        });

        return captalizedNames.join(' ');
    }

    private propertyName(object: object) {
        Object.keys(object).forEach((property) => {
            if (property === 'name') {
                object[property] = this.sanitize(object[property]);
                return;
            }
        });
    }

    public transform(value: object) {
        const hasName = value.hasOwnProperty('name');

        if (hasName) {
            this.propertyName(value);
        }

        return value;
    }
}
