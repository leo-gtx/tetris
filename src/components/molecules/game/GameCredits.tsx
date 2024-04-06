import classNames from 'classnames';
import {FC} from 'react';
import {ClassNameProps} from '../../particles/particles.types';

export interface GameCredit {
    desc: string;

    title: string;

    url: string;
}

export interface GameCreditsProps {
    credits: Array<GameCredit>;
}

export const GameCredits: FC<GameCreditsProps & ClassNameProps> = ({
    credits,
    className
}) => {
    return (
        <div className={classNames(className, 'flex flex-col mx-auto text-xs')}>
            {credits.map(({title, desc, url}, indx) => (
                <div className="flex flex-col mb-3 text-center" key={indx}>
                    <div>{title}:</div>
                    <a href={url} className="text-primary hover:underline">
                        {desc}
                    </a>
                </div>
            ))}
        </div>
    );
};
