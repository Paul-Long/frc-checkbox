import React, {ReactNode} from 'react';
import classNames from 'classnames';

interface ICheckboxProps {
  prefixCls?: string;
  checked?: boolean;
  children?: string | ReactNode;
  onChange?: Function;
  disabled?: boolean;
  style?: object;
}

interface ICheckboxState {
  checked?: boolean;
}

class Checkbox extends React.Component<ICheckboxProps, ICheckboxState> {
  public static defaultProps = {
    prefixCls: 'frc-checkbox',
    checked: false,
    disabled: false,
    style: {}
  };

  constructor(props: ICheckboxProps) {
    super(props);
    this.state = {
      checked: props.checked
    };
  }

  public componentWillReceiveProps(nextProps: ICheckboxProps) {
    if (nextProps.checked !== this.props.checked) {
      this.setState({checked: nextProps.checked});
    }
  }

  public fClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    const {onChange, disabled} = this.props;
    if (disabled) {
      return;
    }
    const checked = !this.state.checked;
    this.setState({checked});
    if (typeof onChange === 'function') {
      onChange(checked);
    }
  };

  render() {
    const {prefixCls, children, disabled, style} = this.props;
    const {checked} = this.state;
    const cls = classNames(prefixCls, {
      [`${prefixCls}-checked`]: checked,
      [`${prefixCls}-disabled`]: disabled
    });
    return (
      <div className={cls} onClick={this.fClick} style={style}>
        <div className={`${prefixCls}-inner`} />
        {children}
      </div>
    );
  }
}

export default Checkbox;
