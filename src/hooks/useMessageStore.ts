import { useCallback, useEffect, useState } from 'react';
import { Message, loadMessages, saveMessage, reactMessage } from '../lib/messageBackend';

export function useMessageStore() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMessages().then((list) => {
      setMessages(list);
      setLoading(false);
    });
  }, []);

  const addMessage = useCallback(async (m: Omit<Message, 'id' | 'reactions'>) => {
    const created = await saveMessage(m);
    setMessages((prev) => [created, ...prev]);
  }, []);

  const addReaction = useCallback(async (id: string, emoji: string) => {
    setMessages((prev) =>
      prev.map((m) =>
        m.id === id
          ? { ...m, reactions: { ...m.reactions, [emoji]: (m.reactions?.[emoji] ?? 0) + 1 } }
          : m
      )
    );
    reactMessage(id, emoji);
  }, []);

  return { messages, loading, addMessage, addReaction };
}