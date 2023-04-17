import { IonBadge, IonCol, IonImg, IonLabel } from "@ionic/react";
import { Team } from "./RoundComponent";

export interface GameRowProps {
  testId: string;
  imageSrc: string;
  team: Team;
  dir: "home" | "away";
}

const GameRow: React.FC<GameRowProps> = ({ testId, imageSrc, team, dir }) => {
  return (
    <IonCol>
      <IonImg
        className={dir === "home" ? "team-crest ion-float-left" : "team-crest ion-float-right"}
        src={team.crest}
        data-testid={testId}
      />
      <IonLabel
        className={
          dir === "home" ? "ion-float-right ion-padding-right" : "ion-float-left ion-padding-left"
        }
      >
        <IonBadge className='ion-margin-horizontal' color='light'>
          {dir === "home"
            ? team.record?.score?.fullTime?.home ?? 0
            : team.record?.score?.fullTime?.away ?? 0}
        </IonBadge>
      </IonLabel>
      <IonLabel className={dir === "home" ? "ion-float-right" : "ion-float-left "}>
        {team.name}
      </IonLabel>
    </IonCol>
  );
};

export default GameRow;
