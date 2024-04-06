import {FC} from 'react';
import {environment} from '../../../environment/environment';
import {AppDialogType} from '../../../store/app/app-model';
import {AppSelectors} from '../../../store/app/app-selectors';
import {AppDialog, AppDialogControl} from '../../molecules/app/AppDialog';
import {GameCredit, GameCredits} from '../../molecules/game/GameCredits';
import {AppSupport} from '../../atoms/app/AppSupport';

const gameCredits: Array<GameCredit> = [
    {
        title: 'UX Design by',
        desc: 'Zayn Assalam',
        url: 'https://dribbble.com/shots/14684127-Tetris-Mobile-App'
    },
    {
        title: 'Programmed by',
        desc: 'Nick Foscarini',
        url: 'https://www.linkedin.com/in/nick-foscarini/'
    },
    {
        title: 'Mobile Portage by',
        desc: 'Leonel Nguefack',
        url: 'https://ndlpixel.com/'
    },
    {
        title: 'Maintained by',
        desc: 'Leonel Nguefack',
        url: 'https://ndlpixel.com/'
    },
    {
        title: 'Source code',
        desc: 'Tetromino',
        url: environment.github
    }
];

export const CreditsDialog: FC<Partial<AppDialogControl>> = ({
    selectOpen = AppSelectors.isOpen(AppDialogType.CREDITS)
}) => {
    return (
        <AppDialog className="max-w-md" title="Credits" selectOpen={selectOpen}>
            <GameCredits credits={gameCredits} />
            <AppSupport />
        </AppDialog>
    );
};
