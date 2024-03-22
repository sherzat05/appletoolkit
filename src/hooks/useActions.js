/*
	Импорт зависимостей:
*/
import { useDispatch } from 'react-redux'
import { menuSliceActions } from './../store/slice/menu-slice'
import { useMemo } from 'react'
import { bindActionCreators } from '@reduxjs/toolkit'
const rootActions = {
	...menuSliceActions
}
/*
	Создается объект rootActions, который содержит все экшены из модуля menuSliceActions. ...menuSliceActions используется для распаковки всех экшенов из menuSliceActions и добавления их в объект rootActions.
*/

const useActions = () => {
	const dispatch = useDispatch()

	return useMemo(() => {
		/*
			Хук useMemo используется для мемоизации результата. Это означает, что если dispatch не изменился между рендерами, будет возвращено предыдущее значение, избегая повторного создания объекта экшенов.
		 */
		return bindActionCreators(rootActions, dispatch)
		/*
			Возвращаемый результат хука - это результат вызова bindActionCreators, который связывает каждый экшен из rootActions с функцией dispatch. Таким образом, создается объект, содержащий все экшены, готовые к использованию в компонентах React.
		*/
	}, [dispatch])
	/*
		Хук возвращает объект с привязанными к функции dispatch экшенами, который можно использовать в компонентах React для диспетчеризации действий Redux.
	*/
}
/*
	Создается хук useActions, который возвращает мемоизированный результат. Этот хук использует хук useDispatch из библиотеки react-redux, чтобы получить функцию dispatch из Redux store.
 */

export default useActions

/*
	Таким образом, этот хук облегчает создание и использование функций для диспетчеризации экшенов в React-компонентах, избегая необходимости каждый раз вызывать useDispatch и bindActionCreators в каждом компоненте.
*/
