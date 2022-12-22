package com.tonkeeper.devkit.data

import android.content.Context
import androidx.datastore.core.DataStore
import androidx.datastore.preferences.core.Preferences
import androidx.datastore.preferences.preferencesDataStore

val Context.settingsDataStore: DataStore<Preferences>
        by preferencesDataStore(name = "passcode-v1")

val Context.walletDataStore: DataStore<Preferences>
        by preferencesDataStore(name = "wallet-v1")

val Context.mnemonicDataStore: DataStore<Preferences>
        by preferencesDataStore(name = "mnemonic-v1")