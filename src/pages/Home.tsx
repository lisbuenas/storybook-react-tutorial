import { IonContent, IonHeader, IonPage, IonSkeletonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import useGetRound from '../hooks/useGetRound';
import { RoundComponent } from '../components/RoundComponent';

const Home: React.FC = () => {
  const { games, loading } = useGetRound(5);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
         
          <IonTitle className='ion-text-center'>Championship Brasileiro Série A</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonToolbar className='ion-text-center'>
          <IonTitle size='large'>5ª Round</IonTitle>
        </IonToolbar>

        {loading ? (
          <IonSkeletonText className='loading-skeleton' />
        ) : (
          <RoundComponent games={games} />
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
