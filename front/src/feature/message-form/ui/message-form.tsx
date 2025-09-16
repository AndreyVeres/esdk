import { Controller, useForm } from 'react-hook-form';
import { MessageFormSchema, type MessageFormType } from '../model/message-form.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { axiosInstance } from '../../../shared/api/axios';
import { Button, Form, Input, notification } from 'antd';
import styles from './message-form.module.scss';
import { useNavigate } from 'react-router-dom';

export const MessageForm = () => {
  const [api, contextHolder] = notification.useNotification();
  const methods = useForm<MessageFormType>({
    defaultValues: {
      name: '',
      phone: '',
      message: '',
    },
    resolver: zodResolver(MessageFormSchema),
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isLoading },
  } = methods;

  const navigation = useNavigate();

  const onSubmit = (formValues: MessageFormType) => {
    axiosInstance
      .post('messages', formValues)
      .then(() => {
        api.success({
          message: 'Сообщение успешно создано 🔥',
          description: 'Вы можете увидеть созданное сообщение в консоли',
        });
        reset();
      })
      .catch(() => {
        api.error({
          message: 'Не удалось создать сообщение',
          description: 'Мы уже работаем над этой проблемой 😉',
        });
      });
  };

  return (
    <>
      {contextHolder}

      <Form
        onFinish={handleSubmit(onSubmit)}
        style={{ maxWidth: 600, width: '100%' }}
        autoComplete='off'
        layout='vertical'
        labelAlign='right'
        colon={false}
      >
        <Form.Item<MessageFormType> label='Name' name='name' validateStatus={errors.name ? 'error' : ''} help={errors.name?.message}>
          <Controller name='name' control={control} render={({ field }) => <Input {...field} />} />
        </Form.Item>

        <Form.Item<MessageFormType> label='Phone' name='phone' validateStatus={errors.phone ? 'error' : ''} help={errors.phone?.message}>
          <Controller
            name='phone'
            control={control}
            render={({ field }) => <Input {...field} type='number' placeholder='375 29 999-99-99' className={styles.phoneInput} />}
          />
        </Form.Item>

        <Form.Item<MessageFormType> label='Message' name='message' validateStatus={errors.message ? 'error' : ''} help={errors.message?.message}>
          <Controller name='message' control={control} render={({ field }) => <Input.TextArea {...field} />} />
        </Form.Item>

        <Form.Item className={styles.submitItem}>
          <Button onClick={() => navigation('/')} htmlType='button'>
            Назад
          </Button>
          <Button disabled={isLoading} type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
