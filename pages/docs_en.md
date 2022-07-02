---
layout: docs
title: Commands
permalink: /docs/en/
---

## Commands for streamer

>### Change the language of bot
>>`!setlang LANGUAGE (rus / eng)`
>>
>>*EXAMPLE:*
>>```
>>!setlang eng
>>```

## Commands for moderators

>### Edit stream title
>>`!title NEWTITLE`
>>
>>*EXAMPLE:*
>>```
>>!title Playing with friends!
>>```

### Изменить игру стрима | Edit stream game
`!game ИГРА | NEWGAME`
>>
>>*EXAMPLE:*
>>```
!game Just Chatting
```

### Забанить юзера для использования бота | Ban user for bot usage
`!ban НИКНЕЙМ | NICKNAME`
>>
>>*EXAMPLE:*
>>```
!ban 70iqbot
```

### Разбанить юзера для использования бота | Unban user for bot usage
`!unban НИКНЕЙМ | NICKNAME`
>>
>>*EXAMPLE:*
>>```
!unban 70iqbot
```

### Добавить мут-слово | Add a mute word
`!bw СЛОВО(-А) | WORD(S)`
>>
>>*EXAMPLE:*
>>```
!bw тест
```

### Убрать мут-слово | Remove a mute word
`!rbw СЛОВО(-А) | WORD(S) (без слов = все бан ворды | empty = all ban words)`
>>
>>*EXAMPLE:*
>>```
!rbw тест
```

### Анти-паста | Anti-copypasta
`!np СЛОВО(-А) | WORD(S)`
>>
>>*EXAMPLE:*
>>```
!np тест
```
**Примечание: ```!rbw СЛОВО(-А)```, чтобы выключить | Note: ```!rbw WORD(S)``` to turn off**

### Добавить команду | Add a command
`!addcom !НАЗВАНИЕ | !COMMANDNAME ТЕКСТ | COMMANDTEXT`
>>
>>*EXAMPLE:*
>>```
!addcom !test Hi
```
**Примечание: вы можете спамить кастомные команды (```!КАСТОМНАЯКОМАНДА 10```) | Note: you can spam custom commands (```!CUSTOMCOMMAND 10```)**

### Редактировать команду | Edit a command
`!editcom !НАЗВАНИЕ | !COMMANDNAME НОВЫЙТЕКСТ | NEWCOMMANDTEXT`
>>
>>*EXAMPLE:*
>>```
!editcom !test Bye
```

### Удалить команду | Delete a command
`!delcom !НАЗВАНИЕ | !COMMANDNAME`
>>
>>*EXAMPLE:*
>>```
!delcom !test
```

### Стандартный спам сообщения | Default message spam
`!spam КОЛИЧЕСТВО | COUNT СООБЩЕНИЕ | MESSAGE`
>>
>>*EXAMPLE:*
>>```
!spam 10 Subscribe to channel
```

### Спам сообщения (/announce) | Message spam (/announce)
`!spamspam СООБЩЕНИЕ | MESSAGE`
>>
>>*EXAMPLE:*
>>```
!spamspam Subscribe to channel
```

>### Очистить чат | Clear the chat
>>`!c`
>>
>>*EXAMPLE:*
>>```
>>!c
>>```
