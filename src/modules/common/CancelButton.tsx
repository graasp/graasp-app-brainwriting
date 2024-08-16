import Button from '@mui/material/Button';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface CancelButtonProps {
  disabled: boolean;
  onCancel: () => void;
}

const CancelButton: FC<CancelButtonProps> = ({ disabled, onCancel }) => {
  const { t } = useTranslation();
  return (
    <Button disabled={disabled} onClick={onCancel}>
      {t('CANCEL')}
    </Button>
  );
};

export default CancelButton;
