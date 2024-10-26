"use client"

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"
import { EventInput } from "@fullcalendar/core/index.js";

export default function Calendar() {
    return (
        <div >
            <div className="relative" style={{ height: "calc(100vh - 40rem)"}}>
                <FullCalendar     
                    plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    headerToolbar={{
                        left: 'prev, next today',
                        center: 'title',
                        right: "dayGridMonth, timeGridWeek, timeGridDay",
                    }}
                    initialView="dayGridMonth"
                    editable={false}
                    navLinks={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    // eventSources={calendarSources}
                    // eventContent={renderEventContent}
                    // weekends={weekendsVisible}
                    eventClick={function (info: EventInput) {
                        if (info.event.url) {
                            window.open(info.event.url);
                        }
                        info.jsEvent.preventDefault();
                    }}
                />
            </div>
        </div>
    )
}