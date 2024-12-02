import { Bell, Settings } from 'lucide-react'
import React from 'react'

export default function SettingsNotification() {
    return (
        <div className="flex items-center gap-5">
            <div className="h-11 w-11 border-2 rounded-md grid place-content-center">
                <Bell size={22} />
            </div>
            <div className="h-11 w-11 border-2 rounded-md grid place-content-center">
                <Settings size={22} />
            </div>
        </div>
        )
}
