import { IonGrid, IonIcon, IonRow } from "@ionic/react";
import TeamCol from "./GameRow";
import { close } from "ionicons/icons";

export interface RoundComponentProps {
  games: any[];
}

export interface Team {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
  record: any; // fastest way
}

export const RoundComponent: React.FC<RoundComponentProps> = ({ games }) => {
  console.log({ games });
  return (
    <IonGrid fixed={true} className='ion-padding-top'>
      {games?.map((game, index) => (
        <IonRow>
          <TeamCol key={index} testId={""} imageSrc={""} team={game.homeTeam} dir='home' />
          <IonIcon icon={close} />
          <TeamCol key={index} testId={""} imageSrc={""} team={game.awayTeam} dir='away' />
        </IonRow>
      ))}
    </IonGrid>
  );
};
