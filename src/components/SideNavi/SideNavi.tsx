import { IntRepNetwork } from './components/Networks/IntRepNetwork/Networks';
import { TarIntNetworks } from './components/Networks/TarIntNetwork/Networks';
import { RepTechNetworks } from './components/Networks/RepTechNetwork/Networks';
import { RepVarNetworks } from './components/Networks/RepVarNetwork/Networks';
import { PaperView } from './components/PaperView/PaperView';
import style from './index.module.scss';
import { SankeyData, SankeyLink, SankeyLinkExtended } from '../../types/sankey';
import { ReactElement, ReactNode, useState } from 'react';
import { FormControl, MenuItem, Select } from '@mui/material';

interface Props {
    clickedNodeLinks: SankeyLinkExtended[] | undefined;
    clickedLink: SankeyLinkExtended | undefined;
    clickedButton: SankeyLink[] | undefined;
    clickedCluster: SankeyData | undefined;
    setClickedCluster: React.Dispatch<React.SetStateAction<SankeyData | undefined>>;
    originData: SankeyData;
    setOriginData: React.Dispatch<React.SetStateAction<SankeyData>>;
}

export function SideNavi({ clickedNodeLinks, clickedLink, clickedButton, clickedCluster, setClickedCluster, originData, setOriginData }: Props) {
    interface Character {
        name: string;
        race: ReactElement;
    }
    const characters: Character[] = [
        { name: 'Tar-Int Network', race: <TarIntNetworks originData={originData} setOriginData={setOriginData} setClickedCluster={setClickedCluster} /> },
        { name: 'Int-Rep Network', race: <IntRepNetwork originData={originData} setOriginData={setOriginData} setClickedCluster={setClickedCluster} /> },
        { name: 'Rep-Var Network', race: <RepVarNetworks originData={originData} setOriginData={setOriginData} setClickedCluster={setClickedCluster} /> },
        { name: 'Rep-Tech Network', race: <RepTechNetworks originData={originData} setOriginData={setOriginData} setClickedCluster={setClickedCluster} /> },
    ];

    const [characterm, setCharacter] = useState<ReactNode>(characters[0].race);

    return (
        <div className={style.sideNavi}>
            <div className={style.title}>Network View</div>

            <FormControl style={{ marginLeft: '15px' }} sx={(theme) => ({ m: 1, mb: 0, width: 180, mt: 0, color: theme.palette.secondary.main })} size="small">
                <Select
                    sx={(theme) => ({
                        border: 1,
                        borderColor: theme.palette.secondary.main,
                        color: theme.palette.secondary.main,
                        fontSize: 10,
                        fontWeight: 'bold',
                        mb: 0,
                        '.MuiOutlinedInput-notchedOutline': { border: 0 },
                    })}
                    multiple={false}
                    defaultValue={'Tar-Int Network'}
                    renderValue={(selected) => {
                        return selected;
                    }}
                    onChange={(e) => {
                        const newCharacter: Character | undefined = characters.find((item) => {
                            return item.name === e.target.value;
                        });

                        return setCharacter(newCharacter?.race);
                    }}
                >
                    {characters.map((c) => (
                        <MenuItem
                            sx={(theme) => ({
                                color: theme.palette.secondary.main,
                                fontSize: 7.5,
                                '&:hover': {
                                    color: 'common.black',
                                    backgroundColor: '#E8DAEF',
                                },
                                '&.Mui-selected': {
                                    color: '#FDFEFE',
                                    backgroundColor: '#A569BD',
                                    '&:hover': { backgroundColor: '#E8DAEF' },
                                },
                            })}
                            key={c.name}
                            value={c.name}
                        >
                            {c.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            {characterm}
            <PaperView
                originData={originData}
                setOriginData={setOriginData}
                clickedNodeLinks={clickedNodeLinks}
                clickedLink={clickedLink}
                clickedButton={clickedButton}
                clickedCluster={clickedCluster}
            />
        </div>
    );
}

// 링크 클릭시 네트워크, 페이퍼 같이 연동되게
