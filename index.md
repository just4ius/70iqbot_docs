# [70IQbot](https://www.twitch.tv/70iqbot)

## Команды стримера | Commands for streamer

### Сменить язык бота | Change the language of bot
`!setlang ЯЗЫК | LANGUAGE (rus / eng)`

*ПРИМЕР | EXAMPLE*
```
!setlang eng
```

## Команды модераторов | Commands for moderators

### Изменить название стрима | Edit stream title
`!title НАЗВАНИЕ | NEWTITLE`

*ПРИМЕР | EXAMPLE*
```
!title Играем в майнкрафт
```

### Изменить игру стрима | Edit stream game
`!game ИГРА | NEWGAME`

*ПРИМЕР | EXAMPLE*
```
!game Just Chatting
```

### Забанить юзера для использования бота | Ban user for bot usage
`!ban НИКНЕЙМ | NICKNAME`

*ПРИМЕР | EXAMPLE*
```
!ban 70iqbot
```

### Разбанить юзера для использования бота | Unban user for bot usage
`!unban НИКНЕЙМ | NICKNAME`

*ПРИМЕР | EXAMPLE*
```
!unban 70iqbot
```

### Добавить мут-слово | Add a mute word
`!bw СЛОВО(-А) | WORD(S)`

*ПРИМЕР | EXAMPLE*
```
!bw тест
```

### Убрать мут-слово | Remove a mute word
`!rbw СЛОВО(-А) | WORD(S) (без слов = все бан ворды | empty = all ban words)`

*ПРИМЕР | EXAMPLE*
```
!rbw тест
```

### Анти-паста | Anti-copypasta
`!np СЛОВО(-А) | WORD(S)`
```!rbw СЛОВО(-А)```, чтобы выключить | ```!rbw WORD(S)``` to turn off

*ПРИМЕР | EXAMPLE*
```
!np тест
```
**Примечание: список сообщений очищается каждые 3 минуты, поэтому не всегда старые сообщения будут удалены | Note: the list of messages clears every 3 minutes, so old messages might not be deleted**

### Добавить команду | Add a command
`!addcom !НАЗВАНИЕ | !COMMANDNAME ТЕКСТ | COMMANDTEXT`

*ПРИМЕР | EXAMPLE*
```
!addcom !test Hi
```
**Примечание: вы можете спамить кастомные команды (```!КАСТОМНАЯКОМАНДА 10```) | Note: you can spam custom commands (```!CUSTOMCOMMAND 10```)**

### Редактировать команду | Edit a command
`!editcom !НАЗВАНИЕ | !COMMANDNAME НОВЫЙТЕКСТ | NEWCOMMANDTEXT`

*ПРИМЕР | EXAMPLE*
```
!editcom !test Hi
```

### Удалить команду | Delete a command
`!delcom !НАЗВАНИЕ | !COMMANDNAME`

*ПРИМЕР | EXAMPLE*
```
!delcom !test
```

### Стандартный спам сообщения | Default message spam
`!spam КОЛИЧЕСТВО | COUNT СООБЩЕНИЕ | MESSAGE`

*ПРИМЕР | EXAMPLE*
```
!spam 10 Subscribe to channel
```

### Спам сообщения (/announce) | Message spam (/announce)
`!spamspam СООБЩЕНИЕ | MESSAGE`

*ПРИМЕР | EXAMPLE*
```
!spamspam Subscribe to channel
```

### Очистить чат | Clear the chat
`!c`

*ПРИМЕР | EXAMPLE*
```
!c
```
