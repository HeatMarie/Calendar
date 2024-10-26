"use client"

import { createContext, useContext, useReducer } from "react";
import type { Dispatch, PropsWithChildren } from "react";

interface EventsAction {
    type: string;
    id: number;
    data: any[];
}

export interface EventsState { 
    id: number;
    data: any[]
}

const CalendarContext = createContext<EventsState[]>([]);

const CalendarDispatchContext = createContext<Dispatch<EventsAction> | null>(null);

let nextId = 0;
export function CreateId() {
    return nextId++;
}

export function CalendarProvider({children}: PropsWithChildren) {
    const [events, dispatch] = useReducer(eventsReducer, initialEvents);

    return (
        <CalendarContext.Provider value={events}>
            <CalendarDispatchContext.Provider value={dispatch}>
                {children}
            </CalendarDispatchContext.Provider>
        </CalendarContext.Provider>
    )
}

export function useEvents() {
    return useContext(CalendarDispatchContext)
}

export function useEventsDispatch() {
    return useContext(CalendarDispatchContext)
}

function eventsReducer(
    events: EventsState[],
    action: EventsAction,
): EventsState[] {
    switch (action.type) {
        case "add": {
            return [
                ...events,
                {
                    id: action.id,
                    data: action.data,
                }
            ]
        }
        case "remove": {
            return events.filter((event) => event.id !== action.id);
        }
        default: {
            return events;
        }
    }
}


const initialEvents: EventsState[] = [];