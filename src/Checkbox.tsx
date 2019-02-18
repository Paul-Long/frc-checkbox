import React, {ReactNode} from 'react';
import classNames from 'classnames';

interface ICheckboxProps {
  prefixCls?: string;
  checked?: boolean;
  children?: string | ReactNode;
  onChange?: Function;
  disabled?: boolean;
  style?: object;
  size?: string;
  indeterminateType?: string;
  indeterminate?: boolean;
}

interface ICheckboxState {
  checked?: boolean;
}

class Checkbox extends React.Component<ICheckboxProps, ICheckboxState> {
  public static defaultProps = {
    prefixCls: 'frc-checkbox',
    checked: false,
    disabled: false,
    style: {},
    size: 'default',
    indeterminateType: 'square',
    indeterminate: false
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
    const {
      prefixCls,
      children,
      disabled,
      style,
      size,
      indeterminate,
      indeterminateType
    } = this.props;
    const {checked} = this.state;
    const cls = classNames(prefixCls, `${prefixCls}-${size}`, {
      [`${prefixCls}-checked`]: checked,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-indeterminate`]: indeterminate && !checked,
      [`${prefixCls}-indeterminate-${indeterminateType}`]:
        indeterminate && !checked
    });
    return (
      <div className={cls} onClick={this.fClick} style={style}>
        <input className={`${prefixCls}-input`} type='checkbox' />
        <span className={`${prefixCls}-inner`} />
        <span>{children}</span>
      </div>
    );
  }
}

export default Checkbox;
