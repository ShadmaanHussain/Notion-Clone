'use server'

import { adminDb } from "@/firebase-admin";
import { auth } from "@clerk/nextjs/server"

export async function createNewDocument() {
    // If a user is not logged in we want to send them to login screen. Instead of hitting this endpoint.
    auth().protect();
    const { sessionClaims } = await auth();

    // get reference to documents from admindb
    const docCollectionRef = adminDb.collection('documents');
    const docRef = await docCollectionRef.add({
        title: "New Doc"
    })

    await adminDb.collection('users').doc(sessionClaims?.email!).collection('rooms').doc(docRef.id).set({
        userId: sessionClaims?.email!,
        role: "owner",
        createdAt: new Date(),
        roomId: docRef.id
    })

    return { docId: docRef.id }
}