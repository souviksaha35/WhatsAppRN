# Migration `20201103191343-init`

This migration has been generated at 11/4/2020, 12:43:43 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "imageUri" TEXT NOT NULL,
    "status" TEXT NOT NULL
)

CREATE TABLE "ChatRoomUser" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userID" INTEGER NOT NULL,
    "chatRoomID" INTEGER NOT NULL,

    FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
)

CREATE TABLE "ChatRoom" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "lastMessageID" INTEGER NOT NULL,

    FOREIGN KEY ("id") REFERENCES "ChatRoomUser"("id") ON DELETE CASCADE ON UPDATE CASCADE
)

CREATE TABLE "Message" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userID" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "chatRoomID" INTEGER NOT NULL,

    FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("chatRoomID") REFERENCES "ChatRoom"("id") ON DELETE CASCADE ON UPDATE CASCADE
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201103191343-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,43 @@
+// 1
+datasource db {
+  provider = "sqlite" 
+  url = "***"
+}
+
+// 2
+generator client {
+  provider = "prisma-client-js"
+}
+
+// 3
+model User {
+  id          Int      @id @default(autoincrement())
+  name        String
+  imageUri    String
+  status      String
+  chatRoomUser ChatRoomUser[] 
+}
+
+model ChatRoomUser {
+    id        Int     @id @default(autoincrement())
+    userID    Int
+    chatRoomID Int
+    user       User   @relation(fields: [userID], references: [id])
+}
+
+model ChatRoom {
+    id        Int     @id @default(autoincrement())
+    chatRoomUsers ChatRoomUser @relation(fields: [id])
+    messages  Message[]
+    lastMessageID   Int
+}
+
+model Message {
+    id   Int   @id @default(autoincrement())
+    userID Int
+    content String
+    createdAt String
+    chatRoomID Int
+    user User @relation(fields: [userID])
+    chatRoom ChatRoom   @relation(fields: [chatRoomID])
+}
```


