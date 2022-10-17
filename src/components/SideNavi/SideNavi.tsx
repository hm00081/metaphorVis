import { Networks } from './components/Networks/Networks';
import { TarIntNetworks } from './components/Networks/addtarintNetwork/Networks';
import { RepTechNetworks } from './components/Networks/addreptechNetwork/Networks';
import { RepVarNetworks } from './components/Networks/addrepvarNetwork/Networks';
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
        { name: 'TarIntNetworks', race: <TarIntNetworks originData={originData} setOriginData={setOriginData} setClickedCluster={setClickedCluster} /> },
        { name: 'IntRepNetworks', race: <Networks originData={originData} setOriginData={setOriginData} setClickedCluster={setClickedCluster} /> },
        { name: 'RepTechNetworks', race: <RepTechNetworks originData={originData} setOriginData={setOriginData} setClickedCluster={setClickedCluster} /> },
        { name: 'RepVarNetworks', race: <RepVarNetworks originData={originData} setOriginData={setOriginData} setClickedCluster={setClickedCluster} /> },
    ];

    const [characterm, setCharacter] = useState<ReactNode>(characters[0].race);

    return (
        <div className={style.sideNavi}>
            <div className={style.title}>Network View</div>
            <FormControl style={{ marginLeft: '15px' }} sx={(theme) => ({ m: 1, mb: 0, width: 180, mt: 0, color: theme.palette.secondary.main })} size="small">
                <Select
                    sx={(theme) => ({
                        color: theme.palette.secondary.main,
                        fontSize: 10,
                        fontWeight: 'bold',
                        mb: 0,
                    })}
                    multiple={false}
                    defaultValue={'TarIntNetworks'}
                    renderValue={(selected) => {
                        return selected;
                    }}
                    onChange={(e, newvalue) => {
                        const newCharacter: Character | undefined = characters.find((item) => {
                            return item.name === e.target.value;
                        });

                        return setCharacter(newCharacter?.race);
                    }}
                >
                    {characters.map((c) => (
                        <MenuItem
                            sx={(theme) => ({
                                ...theme.typography.body1,
                                color: theme.palette.secondary.main,
                                fontSize: 7.5,
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
