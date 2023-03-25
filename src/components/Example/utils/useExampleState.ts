import { useAppDispatch, useAppSelector } from '../../../utils/storeHooks'
import { selectExampleTitle } from '../../../selectors/example'
import { setTitle } from '../../../reducers/example'

export const useExampleState = () => {
    const dispatch = useAppDispatch()

    const title = useAppSelector(selectExampleTitle)

    const setExampleTitle = (value: string) => {
        const processedValue = value.toLocaleUpperCase()

        dispatch(setTitle(processedValue))
    }

    return {
        title,
        setExampleTitle,
    }
}
