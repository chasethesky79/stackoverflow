export interface IQuestion {
    question_id: number;
    title: string;
    view_count: number;
    answer_count: number;
    owner: string;
}

export interface ILoadingComponentProps {
    loading: boolean;
    error: string;
}

export interface IQuestions {
    data: IQuestion[]
}

export type IFeedComponentState = IQuestions & ILoadingComponentProps & { page: number };

export type ICardProps = {
    question: IQuestion
}
