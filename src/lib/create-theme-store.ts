import { createDomain, Domain, sample } from 'effector'

export const createThemeStore = (
    {
        d = createDomain(),
        defaultValue,
        key,
    } : {
        d?: Domain, 
        defaultValue: 'light' | 'dark', 
        key: string,
    }) => {
    const $store = d.store(defaultValue)

    const loadFx = d.effect<void, 'light' | 'dark', Error>()
    const saveFx = d.effect<'light' | 'dark', void, Error>()
    const toggleEvent = d.event()

    $store
        .on(loadFx.doneData, (_, d) => d)
        .on(saveFx.done,(_, {params}) => params)
        .on(toggleEvent, (s) => s === 'light' ? 'dark' : 'light')

    sample({
        clock: $store.updates,
        target: saveFx
    })


    loadFx.use(() => {
        const d = localStorage.getItem(key)
        if (d === null) {
            return defaultValue
        }
        return JSON.parse(d)
    })

    saveFx.use((p) => {
        localStorage.setItem(key, JSON.stringify(p))
    })

    return {
        loadFx,
        saveFx,
        $store,
        toggleEvent
    }

}
