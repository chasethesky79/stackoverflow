import { ICardProps } from "../model/questions-model";
import { CardWrapper, Title, Meta } from "../styled-components/styled-components";

const Card: React.FC<ICardProps> = ({ question }: ICardProps) => {
    const { title, view_count, answer_count, owner } = question;
    return (
        <CardWrapper>
            <Title>
             <Meta>
               <div>
                   {`Views ${view_count}`} {`Answers ${answer_count}`} 
               </div>
             </Meta>
            </Title>
        </CardWrapper>
    )
}

export default Card;