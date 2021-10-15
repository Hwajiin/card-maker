import { getDatabase, ref, set, onValue, remove } from "firebase/database";

class CardRepository {
  constructor() {
    this.database = getDatabase();
  }

  syncCard(userId, onUpdate) {
    const cardRef = ref(this.database, `${userId}/cards`);
    onValue(cardRef, (snapshot) => {
      const data = snapshot.val();
      data && onUpdate(data);
    });
    return () => ref.off();
  }

  saveCard(userId, card) {
    set(ref(this.database, `/${userId}/cards/${card.id}`), card);
  }

  removeCard(userId, card) {
    remove(ref(this.database, `${userId}/cards/${card.id}`));
  }
}
