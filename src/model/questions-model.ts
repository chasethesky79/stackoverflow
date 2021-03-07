export interface IQuestion {
    questionId: number;
}

export interface ILoadingComponentProps {
    loading: boolean;
    error: string;
}

export interface IQuestions {
    data: IQuestion[]
}

export type IFeedComponentState = IQuestions & ILoadingComponentProps & { page: number };

